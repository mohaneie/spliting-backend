const createSplitMethod = async(data) => {
    try {
        const calculatedResponse = data.totalAmount / data.totalPerson;
        const result = Object.assign({}, { totalPerson: data.totalPerson, splittedAmount: calculatedResponse, totalAmount: data.totalAmount });
        return result;
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createSplitMethod }