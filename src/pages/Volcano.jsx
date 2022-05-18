import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Volcano() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return <div>Volcano id: {id}</div>;
}
