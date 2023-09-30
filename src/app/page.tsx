"use client";
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";

export default function Home() {
  return (
    <div>
      <Typography fontFamily="Poppins">
        Event Schedule: 24 Oktober 2021, 16:30
      </Typography>
      <br />
      <Typography>Event Schedule: 24 Oktober 2021, 16:30</Typography>
      <br />
      <Button variant="primary" onClick={() => alert("primary")}>
        Primary
      </Button>
      <Button variant="secondary">Preview</Button>
    </div>
  );
}
