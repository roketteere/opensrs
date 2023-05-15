/**
 *
 *  Spaced Repetition System
 */
const dayjs = require("dayjs");

class SRS {
  constructor(deck, startDate = dayjs().format("MM/DD/YYYY")) {
    this.deck = deck;
    this.box = [];
    this.startDay = startDate;
    this.endDate = dayjs(startDate).add(7, "day").format("MM/DD/YYYY");
    this.monday = [];
    this.tuesday = [];
    this.wednesday = [];
    this.thursday = [];
    this.friday = [];
    this.saturday = [];
    this.sunday = [];
  }
  getBox(card) {
    this.box.push(card);
  }
  toMonday(card) {
    this.monday.push(card);
  }
  toTuesday(card) {
    this.tuesday.push(card);
  }
  toWednesday(card) {}
}
const srs = new SRS();
console.log("Date started: ", srs.startDay);
console.log("End date: ", srs.endDate);
