
import React from "react";
import Card from "../components/Card.jsx";
import ApiData from "../components/ApiData.jsx";

export default function Posts() {
  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <Card title="JSON Latest Posts">
        <ApiData />
      </Card>
    </div>
  );
}
