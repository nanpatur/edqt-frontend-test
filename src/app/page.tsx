"use client";
import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <div>
      <p>123</p>
      <Button variant="primary" onClick={() => alert("primary")}>
        Primary
      </Button>
      <Button variant="secondary">Preview</Button>
    </div>
  );
}
