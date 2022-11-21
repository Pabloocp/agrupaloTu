import { expect, test } from "vitest";
import {encuntraarray} from "../Utils"

test('crear grupos',()=>{
    const arrayTest = ["paco","maria","antonio"]
    const num = 2
    const value =  encuntraarray(arrayTest,num)
    expect(value.length).toBe(2)
    expect(value[0]).toHaveLength(2)
    expect(value[1]).toHaveLength(1)
})