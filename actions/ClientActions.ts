export function isValidURL(url: string): boolean
{
    try {
        const urlLiteral = new URL(url);

        return ["http:", "https:"].includes(urlLiteral.protocol);
    }
    catch
    {
        return false;
    }
}