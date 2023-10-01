import Card from "@/components/atoms/Card";
import { CurriculumSessionProps } from "./types";
import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";
import Icon from "@/components/atoms/Icon";
import styled from "styled-components";
import CurriculumSessionMaterial from "./CurriculumSessionMaterial";
import { useState } from "react";
import { Material } from "@/domains/events/models";
import Button from "@/components/atoms/Button";
import Modal from "@/components/molecules/Modal";
import CurriculumSessionMaterialModal from "./CurriculumSessionMaterialModal";
import InputField from "@/components/atoms/InputField";
import { useUpdateEvent } from "@/domains/events/hooks";

const CurriculumSession: React.FC<CurriculumSessionProps> = ({
  event,
  updateEvent,
  session,
  onDragOver,
  onDragStart,
  onDragEnd,
  draggable,
  $isDragging,
}) => {
  const [materials, setMaterials] = useState(session?.materials || []);
  const [draggedMaterial, setDraggedMaterial] = useState<Material | null>(null);
  const [isModalMaterialOpen, setIsModalMaterialOpen] =
    useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<boolean>(false);

  const handleDragStart = (session: Material) => {
    setDraggedMaterial(session);
  };

  const handleDragOver = (index: number) => {
    if (!draggedMaterial) return;

    const newMaterials = [
      ...materials.filter((session) => session.id !== draggedMaterial.id),
    ];
    newMaterials.splice(index, 0, draggedMaterial);
    setMaterials(newMaterials);
  };

  const handleDragEnd = () => {
    updateEvent({
      ...event,
      curriculum: {
        ...event.curriculum,
        sessions: [
          ...event.curriculum.sessions.map((s) => {
            if (s.id === session.id) {
              return {
                ...s,
                materials,
              };
            }
            return s;
          }),
        ],
      },
    });
    setDraggedMaterial(null);
  };

  const handleModalSubmit = (material: Material) => {
    setMaterials((prevMaterials) => [...prevMaterials, material]);
    setIsModalMaterialOpen(false);
  };

  return (
    <>
      <Card
        $padding={0}
        $isActive={$isDragging ? true : undefined}
        onDragOver={onDragOver}
      >
        <Container $display="flex" $alignItems="center" $gap={8}>
          <Icon
            $name="drag-handle"
            $size={24}
            $cursor="grab"
            $activeCursor="grabbing"
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            draggable={draggable}
          />
          <Container $display="flex" $alignItems="center" $gap={8}>
            {editTitle ? (
              <>
                <InputField
                  type="text"
                  value={session?.title}
                  $width="fit-content"
                />
                <Icon
                  $name="cross"
                  $size={24}
                  onClick={() => setEditTitle(false)}
                />
                <Icon
                  $name="check"
                  $size={20}
                  onClick={() => setEditTitle(false)}
                />
              </>
            ) : (
              <>
                <Typography $size={24} $weight={500}>
                  {session?.title}
                </Typography>
                <Icon
                  $name="edit"
                  $size={20}
                  onClick={() => setEditTitle(true)}
                />
              </>
            )}
          </Container>
          <Icon $name="three-dot-h" $size={32} style={{ marginLeft: "auto" }} />
        </Container>
        <Container
          $padding={[24, 0, 0, 24]}
          $display="flex"
          $flexDirection="column"
          $gap={16}
        >
          {materials?.map((material, i) => (
            <CurriculumSessionMaterial
              key={i}
              material={material}
              onDragOver={() => handleDragOver(i)}
              onDragStart={() => handleDragStart(material)}
              onDragEnd={handleDragEnd}
              draggable
              $isDragging={material.id === draggedMaterial?.id}
            />
          ))}
          <Container $display="flex" $alignItems="center" $gap={16}>
            <Button $padding={8} onClick={() => setIsModalMaterialOpen(true)}>
              <Icon $name="plus" $size={24} />
            </Button>
            <Typography $size={16} $weight={500}>
              Add Lesson Material
            </Typography>
          </Container>
        </Container>
      </Card>
      <CurriculumSessionMaterialModal
        session={session}
        isOpen={isModalMaterialOpen}
        onOK={handleModalSubmit}
        onCancel={() => setIsModalMaterialOpen(false)}
      />
    </>
  );
};

export default CurriculumSession;
