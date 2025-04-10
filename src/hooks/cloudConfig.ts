declare const process: any;
declare const Deno: any;

export class CloudConfig {
    cloudName: string;
    apiKey: string;
    apiSecret: string;

    constructor() {
        this.cloudName = "";
        this.apiKey = "";
        this.apiSecret = "";

        let envVar: string | undefined = undefined;

        if (typeof process !== "undefined" && process.env?.CLOUDINARY_URL) {
            envVar = process.env.CLOUDINARY_URL;
        } else if (typeof Deno !== "undefined" && Deno.env?.get) {
            envVar = Deno.env.get("CLOUDINARY_URL");
        }

        if (envVar) {
            try {
                const url = new URL(envVar);
                this.cloudName = url.host;
                this.apiKey = url.username || "";
                this.apiSecret = url.password || "";
            } catch {
                throw new Error(`Invalid CLOUDINARY_URL: '${envVar}'`);
            }
        }
    }
}
