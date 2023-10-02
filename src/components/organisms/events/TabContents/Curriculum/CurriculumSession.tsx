import Card from "@/components/atoms/Card";
import { CurriculumSessionProps } from "./types";
import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";
import Icon from "@/components/atoms/Icon";
import CurriculumSessionMaterial from "./CurriculumSessionMaterial";
import { useState, useEffect } from "react";
import { Event, Material, Session } from "@/domains/events/models";
import Button from "@/components/atoms/Button";
import CurriculumSessionMaterialModal from "./CurriculumSessionMaterialModal";
import InputField from "@/components/atoms/InputField";
import DropdownMenu from "@/components/atoms/DropdownMenu";

const CurriculumSession: React.FC<CurriculumSessionProps> = ({
  event,
  updateEvent,
  session,
  onDragOver,
  onDragStart,
  onDragEnd,
  draggable,
  $isDragging,
  handleDeleteSession,
}) => {
  const [sessionTemp, setSessionTemp] = useState<Session>(session);
  const [materials, setMaterials] = useState(session?.materials || []);
  const [draggedMaterial, setDraggedMaterial] = useState<Material | null>(null);
  const [isModalMaterialOpen, setIsModalMaterialOpen] =
    useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (session.id !== sessionTemp.id) {
      setSessionTemp(session);
      setMaterials(session?.materials || []);
    }
  }, [session]);

  const handleDragStart = (material: Material) => {
    setDraggedMaterial(material);
  };

  const handleDragOver = (index: number) => {
    if (!draggedMaterial) return;

    const newMaterials = [
      ...materials.filter((material) => material.id !== draggedMaterial.id),
    ];
    newMaterials.splice(index, 0, draggedMaterial);
    setMaterials(newMaterials);
  };

  const handleUpdateEvent = (payload: Event, callback: () => void) => {
    updateEvent(payload);
    callback();
  };

  const handleDragEnd = () =>
    handleUpdateEvent(
      {
        ...event,
        curriculum: {
          ...event.curriculum,
          sessions: [
            ...event.curriculum.sessions.map((s) => {
              if (s.id === sessionTemp.id) {
                return {
                  ...s,
                  materials,
                };
              }
              return s;
            }),
          ],
        },
      },
      () => setDraggedMaterial(null),
    );

  const handleEditTitle = () =>
    handleUpdateEvent(
      {
        ...event,
        curriculum: {
          ...event.curriculum,
          sessions: [
            ...event.curriculum.sessions.map((s) => {
              if (s.id === sessionTemp.id) {
                return {
                  ...s,
                  title: editTitle || "",
                };
              }
              return s;
            }),
          ],
        },
      },
      () => {
        setSessionTemp({
          ...sessionTemp,
          title: editTitle || "",
        });
        setEditTitle(undefined);
      },
    );

  const handleModalSubmit = (material: Material) =>
    handleUpdateEvent(
      {
        ...event,
        curriculum: {
          ...event.curriculum,
          sessions: [
            ...event.curriculum.sessions.map((s) => {
              if (s.id === sessionTemp.id) {
                return {
                  ...s,
                  materials: [...s.materials, material],
                };
              }
              return s;
            }),
          ],
        },
      },
      () => {
        setMaterials((prevMaterials) => [...prevMaterials, material]);
        setIsModalMaterialOpen(false);
      },
    );

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
                  value={editTitle}
                  $width="fit-content"
                  onChange={({ target }) => {
                    setEditTitle(target.value);
                  }}
                />
                <Icon
                  $name="cross"
                  $size={24}
                  onClick={() => {
                    setEditTitle(undefined);
                  }}
                />
                <Icon $name="check" $size={20} onClick={handleEditTitle} />
              </>
            ) : (
              <>
                <Typography $size={24} $weight={500}>
                  {sessionTemp?.title}
                </Typography>
                <Icon
                  $name="edit"
                  $size={20}
                  onClick={() => setEditTitle(sessionTemp?.title)}
                />
              </>
            )}
          </Container>
          <DropdownMenu
            items={[{ key: "delete", label: "Delete" }]}
            onSelect={(key) => {
              switch (key) {
                case "delete":
                  handleDeleteSession(session.id);
                  break;
              }
            }}
          >
            <Icon
              $name="three-dot-h"
              $size={32}
              style={{ marginLeft: "auto" }}
              onClick={(e) => e.preventDefault()}
            />
          </DropdownMenu>
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
