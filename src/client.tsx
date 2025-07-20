import { hydrateRoot } from "react-dom/client";
import { createRouter } from "./router";
import { StrictMode } from "react";
import { StartClient } from "@tanstack/react-start";

const router = createRouter()

hydrateRoot(
    document,
    <StrictMode>
        <StartClient router={router} />
    </StrictMode>
)