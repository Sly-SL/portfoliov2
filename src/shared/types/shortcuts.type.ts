import {
    shortcuts,
    shortcutsProjects,
    shortcutsSlysl,
    shortcutsSwift,
    shortcutsTS,
    shortcutsVersions
} from "@/shared/enums/shortcuts.enum";

export type ShortcutsType = typeof shortcuts[keyof typeof shortcuts];

export type ShortcutsSlyslType = typeof shortcutsSlysl[keyof typeof shortcutsSlysl];

export type ShortcutsSwiftType = typeof shortcutsSwift[keyof typeof shortcutsSwift];

export type ShortcutsTSType = typeof shortcutsTS[keyof typeof shortcutsTS];

export type ShortcutsProjectsType = typeof shortcutsProjects[keyof typeof shortcutsProjects];

export type ShortcutsVersionsType = typeof shortcutsVersions[keyof typeof shortcutsVersions];

export type CascadeShortcutsType = ShortcutsType | ShortcutsSlyslType | ShortcutsSwiftType | ShortcutsTSType | ShortcutsProjectsType | ShortcutsVersionsType;