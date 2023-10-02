import Container from "@/components/atoms/Container";
import Icon from "@/components/atoms/Icon";
import Typography from "@/components/atoms/Typography";
import { formatDate } from "@/utils/formatDate";
import { formatDuration } from "@/utils/formatDuration";
import styled from "styled-components";
import { CurriculumSessiomMaterialProps } from "./types";
import DropdownMenu from "@/components/molecules/DropdownMenu";

const CurriculumSessionMaterial: React.FC<CurriculumSessiomMaterialProps> = ({
  material,
  onDragOver,
  onDragStart,
  onDragEnd,
  draggable,
  $isDragging,
  handleDeleteMaterial,
}) => {
  const { date, time } = formatDate(material?.startDate);

  return (
    <MaterialContainer onDragOver={onDragOver} $isDragging={$isDragging}>
      <Container $display="flex" $alignItems="center" $gap={8}>
        <Icon
          className="drag-handle"
          $name="drag-handle"
          $size={24}
          $cursor="grab"
          $activeCursor="grabbing"
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          draggable={draggable}
        />
        <IconBackground>
          <Icon
            $name={material?.type === "online" ? "video" : "pin-location"}
            $size={32}
          />
        </IconBackground>
        <Typography $size={16} $weight={500}>
          {material?.title}
        </Typography>
        {material?.isRequired && (
          <>
            <Typography $size={20} $weight={100} $color="steelGray">
              |
            </Typography>
            <Typography $size={16} $weight={500} $color="purple">
              Required
            </Typography>
          </>
        )}
        {material?.isPreviewable && (
          <>
            <Icon $name="dot" $size={24} />
            <Typography $size={16} $weight={500} $color="slateGray">
              Previewable
            </Typography>
          </>
        )}
        <Container $display="flex" $width="auto"></Container>
        <Icon $name="time-circle" $size={24} />
        <Typography $size={16} $weight={500}>
          {date} | {time}
        </Typography>
        <Icon $name="dot" $size={24} />
        <Icon $name="time-circle" $size={24} />
        <Typography $size={16} $weight={500}>
          {formatDuration(material?.duration)}
        </Typography>
        {material?.isDownloadable && (
          <>
            <Icon $name="dot" $size={24} />
            <Icon $name="download" $size={24} />
            <Typography $size={16} $weight={500}>
              Downloadable
            </Typography>
          </>
        )}
        <DropdownMenu
          items={[{ key: "delete", label: "Delete" }]}
          onSelect={(key) => {
            switch (key) {
              case "delete":
                handleDeleteMaterial(material.id);
                break;
            }
          }}
        >
          <Icon
            $name="three-dot-h"
            $size={32}
            onClick={(e) => e.preventDefault()}
          />
        </DropdownMenu>
      </Container>
    </MaterialContainer>
  );
};

const IconBackground = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.frostGray};
  border-radius: 8px;
`;

const MaterialContainer = styled(Container)<{ $isDragging: boolean }>`
  outline: ${({ $isDragging, theme }) =>
    $isDragging ? `2px solid ${theme.colors.purple}` : "none"};
  :hover {
    background-color: ${({ theme }) => theme.colors.paleGray};
  }
`;

export default CurriculumSessionMaterial;
