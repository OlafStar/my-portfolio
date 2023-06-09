const constructMediaQuery = (queries: string[]) =>
    `@media only screen and ${queries.map((q) => `(${q})`).join(' and ')}`;

type TransformerType = (
    breakpointValue: number,
    nextBreakpointValue?: number,
) => string;

export const maxWidth: TransformerType = (value) =>
    constructMediaQuery([`max-width: ${value}px`]);
export const minWidth: TransformerType = (value) =>
    constructMediaQuery([`min-width: ${value + 1}px`]);
export const minMaxWidth: TransformerType = (value, nextBreakpointValue) =>
    constructMediaQuery([
        `min-width: ${value}px`,
        `max-width: ${nextBreakpointValue}px`,
    ]);

export type BreakpointsType = Record<
    'phoneS' | 'phone' | 'tablet' | 'laptop' | 'desktop' | 'wideDesktop',
    number
>;

const generateMediaQueries = (
    breakpoints: BreakpointsType,
    transformer: TransformerType,
): BreakpointsType =>
    // @ts-ignore
    Object.fromEntries(
        Object.entries(breakpoints).map(([name, value], i, entries) => [
            name,
            transformer(value, entries[i]?.[1]),
        ]),
    );

export const breakpoints: BreakpointsType = {
    phoneS: 375,
    phone: 546,
    tablet: 768,
    laptop: 1088,
    desktop: 1440,
    wideDesktop: 1700,
};

export const above = generateMediaQueries(breakpoints, minWidth);
export const below = generateMediaQueries(breakpoints, maxWidth);
export const only = generateMediaQueries(breakpoints, minMaxWidth);
