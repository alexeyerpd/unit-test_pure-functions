import { getHealthColor } from "../getHealthColor";

test("should be healthy", () => {
    const player = { name: "Маг", health: 90 };
    expect(getHealthColor(player)).toBe("healthy");
});

test("should be wounded 50", () => {
    const player = { name: "Маг", health: 50 };
    expect(getHealthColor(player)).toBe("wounded");
});

test("should be wounded 45", () => {
    const player = { name: "Маг", health: 45 };
    expect(getHealthColor(player)).toBe("wounded");
});

test("should be wounded 15", () => {
    const player = { name: "Маг", health: 15 };
    expect(getHealthColor(player)).toBe("wounded");
});

test("should be critical", () => {
    const player = { name: "Маг", health: 14 };
    expect(getHealthColor(player)).toBe("critical");
});

test("should be error", () => {
    try {
        getHealthColor();
    } catch (error) {
        expect(error.message).toBe("Должен быть передан игрок");
    }
});
