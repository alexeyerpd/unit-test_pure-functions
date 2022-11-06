export function getHealthColor(player) {
    if (!player) {
        throw new Error("Должен быть передан игрок");
    }

    if (player.health > 50) {
        return "healthy";
    }
    if (player.health >= 15) {
        return "wounded";
    }
    return "critical";
}
