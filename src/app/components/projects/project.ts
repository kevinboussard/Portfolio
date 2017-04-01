import {Skill} from "../skills/skill";
import {Model} from "../../model";

export class Project implements Model{

  position: number;
  name: string;
  description: string;
  picture: string;
  skills : Skill[];

}
