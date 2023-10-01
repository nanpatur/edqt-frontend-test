import Modal from "@/components/molecules/Modal";
import { CurriculumSessionMaterialModalProps } from "./types";
import { useState, useMemo } from "react";
import InputField from "@/components/atoms/InputField";
import Typography from "@/components/atoms/Typography";
import Container from "@/components/atoms/Container";
import Input from "@/components/molecules/Input";
import { generateRandomString } from "@/utils/generateRandomString";
import { Material } from "@/domains/events/models";

const CurriculumSessionMaterialModal: React.FC<
  CurriculumSessionMaterialModalProps
> = ({ isOpen, onOK, onCancel, session }) => {
  const [formData, setFormData] = useState<Material>({
    id: generateRandomString(5),
    title: "",
    type: "online",
    url: "",
    isRequired: false,
    startDate: "",
    duration: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    isDownloadable: false,
    isPreviewable: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    let validValue: any = value;
    if (type === "number") {
      validValue = Number(value);
    }
    if (type === "date") {
      validValue = new Date(value).toISOString();
    }

    let checked: boolean | undefined;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      checked = target.checked;
    }
    if (name.split(".").length > 1) {
      const [parent, child] = name.split(".");
      setFormData((prevData: any) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: checked !== undefined ? checked : validValue,
        },
      }));
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked !== undefined ? checked : validValue,
    }));
  };

  const isFormValid = useMemo<boolean>(
    () =>
      !!(
        formData.title &&
        formData.startDate &&
        formData.duration.hours &&
        formData.duration.hours >= 0 &&
        formData.duration.minutes &&
        formData.duration.minutes >= 0 &&
        formData.duration.seconds &&
        formData.duration.seconds >= 0
      ),
    [
      formData.title,
      formData.startDate,
      formData.duration.hours,
      formData.duration.minutes,
      formData.duration.seconds,
    ],
  );

  const handleSubmit = () => {
    onOK(formData);
  };

  return (
    <Modal
      title="Add Lesson Material"
      subtitle={`Session: ${session?.title}`}
      isOpen={isOpen}
      onOK={handleSubmit}
      onCancel={onCancel}
      okLabel="Create"
      okButtonProps={{
        disabled: !isFormValid,
      }}
    >
      <form>
        <Container $display="flex" $gap={8} $flexDirection="column">
          <Input
            label="Title"
            placeholder="Enter title"
            required
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
          />

          <Input
            label="Start Date"
            placeholder="Select start date"
            required
            type="date"
            id="startDate"
            name="startDate"
            onChange={handleChange}
          />

          <Input
            label="Type"
            placeholder="Select type"
            required
            type="select"
            id="type"
            name="type"
            onChange={handleChange}
            options={[
              { label: "Online", value: "online" },
              { label: "Onsite", value: "onsite" },
            ]}
          />

          {formData.type && (
            <Input
              label={formData.type === "online" ? "Video URL" : "Location URL"}
              placeholder={
                formData.type === "online"
                  ? "Enter video URL"
                  : "Enter location URL"
              }
              required
              type="url"
              id="url"
              name="url"
              onChange={handleChange}
            />
          )}

          <Input label="Duration" required type="number">
            <Container $display="flex" $gap={8} $alignItems="center">
              <InputField
                type="number"
                id="hours"
                name="duration.hours"
                placeholder="Hours"
                required
                onChange={handleChange}
              />
              :
              <InputField
                type="number"
                id="minutes"
                name="duration.minutes"
                placeholder="Minutes"
                required
                onChange={handleChange}
              />
              :
              <InputField
                type="number"
                id="seconds"
                name="duration.seconds"
                placeholder="Seconds"
                required
                onChange={handleChange}
              />
            </Container>
          </Input>

          <Input
            label="Required?"
            type="checkbox"
            id="isRequired"
            name="isRequired"
            onChange={handleChange}
          />

          <Input
            label="Downloadable?"
            type="checkbox"
            id="isDownloadable"
            name="isDownloadable"
            onChange={handleChange}
          />

          <Input
            label="Previewable?"
            type="checkbox"
            id="isPreviewable"
            name="isPreviewable"
            onChange={handleChange}
          />
        </Container>
      </form>
      <p>is valid: {String(isFormValid)}</p>
    </Modal>
  );
};

export default CurriculumSessionMaterialModal;
