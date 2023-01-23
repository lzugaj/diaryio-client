import * as paths from "./paths";
import { NoteRequest, NoteResponse } from "../dto/types";

// POST /api/v1/notes
export async function addNote(data: NoteRequest): Promise<boolean> {
  const response = await fetch(paths.diaryio.notes, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.ok;
}

// GET /api/v1/notes/:id
export async function getNote(id: string | undefined): Promise<NoteResponse> {
  const response = await fetch(`${paths.diaryio.notes}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

// GET /api/v1/notes
export async function getNotes(): Promise<NoteResponse[]> {
  const response = await fetch(paths.diaryio.notes, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

// PATCH /api/v1/notes/:id
export async function updateNote(id: string | undefined, data: NoteRequest): Promise<boolean> {
  const response = await fetch(`${paths.diaryio.notes}/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.ok;
}

// DELETE /api/v1/notes/:id
export async function deleteNote(id: number): Promise<boolean> {
  const response = await fetch(`${paths.diaryio.notes}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.ok;
}
