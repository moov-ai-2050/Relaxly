export function formatPrice(amount: number): string {
    return `SAR ${amount.toFixed(2)}`;
}

export function calculateTotalPrice(basePrice: number, duration: number, preparationTime: number = 15): number {
    const totalDuration = duration + preparationTime;
    return (basePrice / 60) * totalDuration;
}