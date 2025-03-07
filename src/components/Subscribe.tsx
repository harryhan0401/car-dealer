"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          alt="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="cursor-default"
        />
        <Button
          className={`absolute rounded-l-none right-0 top-0 size-9 ${email ? "" : "pointer-events-none opacity-50"}`}
        >
          <ArrowRight />
        </Button>
      </div>
    </form>
  );
};
export default Subscribe;
