const length = 5

totalBlocks = 3 * length - (length + 1)

for (let index = 1; index != length + 1; index++) {
    const invisibleBlocks = 3 * index - (index + 1)
    const occupiedBlocks = totalBlocks - invisibleBlocks

    let block = ""
    for (let index = 0; index < occupiedBlocks / 2; index++) {
        block += " "
    }
    for (let index = 0; index < invisibleBlocks; index++) {
        block += "+"
    }
    for (let index = 0; index < occupiedBlocks / 2; index++) {
        block += " "
    }
    console.log(block);
}