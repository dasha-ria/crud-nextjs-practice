"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/crud_app/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <form className="pt-8" onSubmit={create}>
      <h3>Create a new Note</h3>
      <div className="flex flex-col gap-2">
        <input
          className="border border-black w-60 p-1"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          className="border border-black w-60 p-1"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button className="mt-2 bg-black text-white p-2" type="submit">
        Create note
      </button>
    </form>
  );
}
