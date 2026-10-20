import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AudienceProvider, useAudience } from "@/components/audience-provider";
import { audienceOptions, getAudiencePillars, pillars } from "@/lib/content";

describe("Audience selection", () => {
  it("defaults to parents and pupils", () => {
    const { result } = renderHook(() => useAudience(), { wrapper: AudienceProvider });
    expect(result.current.audience).toBe("parents");
  });

  it("shares selection between content blocks without navigation", () => {
    const { result } = renderHook(() => ({ header: useAudience(), page: useAudience() }), { wrapper: AudienceProvider });
    for (const option of audienceOptions) {
      act(() => result.current.header.setAudience(option.id));
      expect(result.current.page.audience).toBe(option.id);
    }
  });

  it.each(audienceOptions)("preserves all 10 measures and their structure for $label", ({ id }) => {
    const actual = getAudiencePillars(id);
    expect(actual.flatMap((p) => p.measures).map((m) => m.n)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const structure = (items: typeof pillars) => items.map((p) => ({ id: p.id, name: p.name, measures: p.measures.map((m) => ({ n: m.n, slug: m.slug, title: m.t, sub: m.sub, paragraphs: m.body.length })) }));
    expect(structure(actual)).toEqual(structure(pillars));
    expect(actual).not.toBe(pillars);
  });
});