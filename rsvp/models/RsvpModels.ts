/**
 * Represents the possible RSVP statuses for a player.
 */
export type RsvpStatus = "Yes" | "No" | "Maybe";

/**
 * Represents a player with a unique ID and name.
 */
export interface Player {
    /**
     * Unique identifier for the player.
     * @example "1"
     */
    id: string;

    /**
     * Name of the player.
     * @example "Alice"
     */
    name: string;
}

/**
 * Represents an RSVP entry for a player with their status.
 */
export interface RsvpEntry {
    /**
     * The player associated with this RSVP entry.
     */
    player: Player;

    /**
     * The RSVP status of the player.
     * Possible values are: "Yes", "No", "Maybe".
     */
    status: RsvpStatus;
}
