import { describe, expect, it } from "vitest";
import { educationMilestones, educationStages, isOnEducationPath } from "../lib/education-schema";

describe("Supplied 8+2 education scheme", () => {
  it("preserves three primary cycles of 3+3+2 years", () => {
    expect(educationStages.filter((s) => s.kind === "basic").map((s) => s.end - s.start)).toEqual([3, 3, 2]);
  });
  it("keeps compulsory secondary education at ages 14–16", () => {
    const stage = educationStages.find((s) => s.id === "secondary");
    expect([stage?.start, stage?.end]).toEqual([14, 16]);
  });
  it("preserves the four verification ages", () => {
    expect(educationMilestones.map((s) => s.age)).toEqual([9, 12, 14, 16]);
  });
  it("keeps the three secondary branches starting at 14 and ending at 16, 17 and 18", () => {
    expect(educationStages.filter((s) => ["secondary", "vocational", "upper"].includes(s.id)).map((s) => [s.start, s.end])).toEqual([[14, 16], [14, 17], [14, 18]]);
  });
  it("keeps the gymnasium path at ages 12–18 separate from the final ZŠ cycle", () => {
    expect(educationStages.filter((s) => isOnEducationPath(s, "gymnasium")).map((s) => s.id)).toEqual(["preschool", "primary", "middle", "gymnasium"]);
    const gymnasium = educationStages.find((s) => s.id === "gymnasium");
    expect([gymnasium?.start, gymnasium?.end]).toEqual([12, 18]);
  });
});