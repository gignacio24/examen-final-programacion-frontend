export const calculations = {
 
  calculateWeightedAverage: (grade1, grade2, grade3) => {
    const weighted = (grade1 * 0.35) + (grade2 * 0.35) + (grade3 * 0.30)
    return Math.round(weighted * 100) / 100
  },

  determineApproval: (average, attendance) => {
    return average >= 40 && attendance >= 80
  }
}
