import "server-only";
import fs from "fs";
import YAML from "yaml";

export interface WeddingData {
  names: string[];
  location: string;
  date: string;
  Pic: PicSection;
  Program: ProgramType[];
  Photo: string[];
}

export type ProgramType = SimpleRowProgram | HymnProgram | VerseProgram;

export interface ProgramBase {
  title: string;
  pic: string;
  state: string;
}

export interface PicSection {
  left: Pic[];
  right: Pic[];
}

export interface Pic {
  title: string;
  name: string[];
}

export interface SimpleRowProgram extends ProgramBase {
  type: "simple";
}

export interface HymnProgram extends ProgramBase {
  type: "hymn";
  content: Hymn[];
}

export interface Verse {
  title: string;
  text: string[];
}

export interface VerseProgram extends ProgramBase {
  type: "verse";
  content: Verse[];
}

export interface Hymn {
  title: string;
  text: string[];
}

export const preload = (id: string) => {
  void getItem();
};

export const getItem = () => {
  const file = fs.readFileSync("data/data.yaml", "utf8");
  const data = YAML.parse(file);

  return data as WeddingData;
};
