import Card from "@/components/atoms/Card";
import { CurriculumSessionProps } from "./types";
import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";
import Icon from "@/components/atoms/Icon";
import styled from "styled-components";
import CurriculumSessionMaterial from "./CurriculumSessiomMaterial";
import { useState } from "react";
import { Material } from "@/domains/events/models";
import Button from "@/components/atoms/Button";

const CurriculumSession: React.FC<CurriculumSessionProps> = ({
  session,
  onDragOver,
  onDragStart,
  onDragEnd,
  draggable,
  $isDragging,
}) => {
  const [materials, setMaterials] = useState(session?.materials || []);
  const [draggedMaterial, setDraggedMaterial] = useState<Material | null>(null);

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
    setDraggedMaterial(null);
  };

  return (
    <Card
      $padding={0}
      $isActive={$isDragging ? true : undefined}
      onDragOver={onDragOver}
    >
      <Container display="flex" $alignItems="center" $gap={8}>
        <GrabIcon
          name="drag-handle"
          size={24}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          draggable={draggable}
        />
        <Typography size={24} $weight={500}>
          {session?.title}
        </Typography>
        <Icon name="three-dot-h" size={32} style={{ marginLeft: "auto" }} />
      </Container>
      <Container
        $padding={[24, 0, 0, 24]}
        display="flex"
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
        <Container display="flex" $alignItems="center" $gap={16}>
          <Button $padding={8}>
            <Icon name="plus" size={24} />
          </Button>
          <Typography size={16} $weight={500}>
            Add Lesson Material
          </Typography>
        </Container>
      </Container>
    </Card>
  );
};

const GrabIcon = styled(Icon)`
  cursor: grab;
  :active {
    cursor: grabbing;
  }
`;

export default CurriculumSession;
