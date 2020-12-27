class Difference {
  constructor(a) {
    this.a = a;
    // this.maximumDifference = 0
  }
  computeDifference() {
    const max = this.a.reduce((a, b) => Math.max(a, b));
    const min = this.a.reduce((a, b) => Math.min(a, b));
    this.maximumDifference = max - min;
  }
}


// During the time of writing, Javascript option was not available for this particular challenge.
// Solution in Python3 \>

class Difference:
    def __init__(self, a):
        self.__elements = a

    def computeDifference(self):
        maximum = max(self.__elements) - min(self.__elements)
        self.maximumDifference = maximum


_ = input()
a = [int(e) for e in input().split(" ")]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
