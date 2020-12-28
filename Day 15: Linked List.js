function Solution() {
  this.insert = function (head, data) {
    if (head == null) {
      head = new Node(data);
    } else {
      let curr = head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = new Node(data);
    }
    return head;
  };

  this.display = function (head) {
    var start = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  };
}
