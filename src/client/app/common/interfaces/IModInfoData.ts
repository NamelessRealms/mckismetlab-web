export default interface IModInfoData {
    id: number;
    name: string;
    summary: string;
    imgUrl: string;
    author: {
        name: string;
        url: string;
    }
    modLoaders: Array<"Forge" | "Fabric">
    latestMinecraftVersion: string;
    downloadCount: number;
    dateReleased: string;
    dateCreated: string;
}