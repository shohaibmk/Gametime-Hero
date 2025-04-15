import { Player, RsvpEntry, RsvpStatus } from "../models/RsvpModels";
import { Logger } from "../utils/Logger";

/**
 * RsvpService is responsible for managing the RSVP responses of players.
 * It allows adding, updating, and retrieving RSVP statuses, as well as counting responses.
 */
export class RsvpService {
    // Map to store RSVP entries, keyed by player ID
    private rsvpMap: Map<string, RsvpEntry> = new Map();

    /**
     * Creates an instance of RsvpService.
     * @param logger - A logger instance for logging updates.
     */
    constructor(private logger: Logger) { }

    /**
     * Adds or updates a player's RSVP status.
     * 
     * @param player - The player whose RSVP status is being updated.
     * @param status - The new RSVP status of the player ("Yes", "No", or "Maybe").
     */
    addOrUpdateRsvp(player: Player, status: RsvpStatus): void {
        const entry: RsvpEntry = { player, status };
        this.rsvpMap.set(player.id, entry);
        this.logger.log(`RSVP updated for ${player.name}: ${status}`);
    }

    /**
     * Retrieves a list of confirmed attendees (those who RSVP'd "Yes").
     * 
     * @returns An array of players who have confirmed their attendance.
     */
    getConfirmedAttendees(): Player[] {
        return Array.from(this.rsvpMap.values())
            .filter(entry => entry.status === "Yes")
            .map(entry => entry.player);
    }

    /**
     * Returns the count of total responses, confirmed, and declined responses.
     * 
     * @returns An object containing the total number of responses, confirmed, and declined counts.
     */
    getCounts(): { total: number; confirmed: number; declined: number; } {
        let confirmed = 0;
        let declined = 0;

        // Iterate over all RSVP entries and count the confirmed and declined responses
        for (const entry of this.rsvpMap.values()) {
            if (entry.status === "Yes") confirmed++;
            if (entry.status === "No") declined++;
        }

        return {
            total: this.rsvpMap.size,
            confirmed,
            declined
        };
    }
}
