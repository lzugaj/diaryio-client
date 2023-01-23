import env from "../env";

const api = {
  diaryio: `${env.REACT_APP_GATEWAY_BASE_URL}/api/v1`,
};

export const diaryio = {
  notes: `${api.diaryio}/notes`,
};
