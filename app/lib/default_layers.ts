import { env } from "app/lib/env_client";
import type { DefaultLayer, LayerConfig } from "@prisma/client";

const defaults = {
  type: "MAPBOX",
  token: env.NEXT_PUBLIC_MAPBOX_TOKEN,
} as const;

export type LayerConfigTemplate = Pick<
  LayerConfig,
  "name" | "url" | "type" | "token"
>;

const LAYERS: Record<DefaultLayer, LayerConfigTemplate> = {
  MONOCHROME: {
    name: "Monochrome",
    url: "mapbox://styles/jcsanford/clrm4ld85003n01qsh7bk9uk5",
    ...defaults,
  },
  DARK: {
    name: "Dark",
    url: "mapbox://styles/jcsanford/clrm4mpjl003i01qq6m7w15i2",
    ...defaults,
  },
  SATELLITE: {
    name: "Satellite",
    url: "mapbox://styles/jcsanford/clrm4oak0003j01qqf5p2dvab",
    ...defaults,
  },
  STREETS: {
    name: "Streets",
    url: "mapbox://styles/jcsanford/clrm4p0do003n01p20f1b84w9",
    ...defaults,
  },
};

export const DEFAULT_LAYER = LAYERS.MONOCHROME;

export default LAYERS;
