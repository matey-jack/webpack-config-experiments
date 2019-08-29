
interface FridayConfig {
  salesFunnelUrl: string;
}

declare var fridayConfig: FridayConfig;

export const salesFunnelUrl = fridayConfig.salesFunnelUrl;
export const myFridayUrl = fridayConfig.salesFunnelUrl;
