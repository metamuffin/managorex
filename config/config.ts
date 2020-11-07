import { Config } from "../webserver/types";

const VERSIONS = {
    VANILLA_16_3: { name: "Vanilla 1.16.3", url: "" },
    VANILLA_16_4: { name: "Vanilla 1.16.4", url: "https://launcher.mojang.com/v1/objects/35139deedbd5182953cf1caa23835da59ca3d7cd/server.jar" },
    SPIGOT_16_3: { name: "Spigot 1.16.3", url: "" },
}

export const USE_HTTP = true
export const USE_HTTPS = false
export const USE_DEV_PORTS = true

export const CONFIG: Config = {

    updateInterval: 30,
    servers: [
        {
            name: "test-1",
            deploy: {
                version: VERSIONS.VANILLA_16_3,
                options: {
                    gamemode: "creative",
                    motd: "Hallo keks!"
                }
            },
            display: {
                description: "Just testing",
                exposedStats: {
                    "blub": "blah"
                },
                showConsole: true
            }
        }
    ],
}