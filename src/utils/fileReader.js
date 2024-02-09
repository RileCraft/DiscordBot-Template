import { existsSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";

export const fileReader = (dir) => {
    dir = fileURLToPath(dir);
    if (!existsSync(dir)) return [];
    const files = [];
    const directoryData = readdirSync(dir);

    for (const file of directoryData) {
        const filePath = join(dir, file);
        const stats = statSync(filePath);

        if (stats.isFile() && extname(filePath) === ".js") files.push(filePath);
        else if (stats.isDirectory()) files.push(...fileReader(`file:///${filePath}`));
    };

    return files;
};