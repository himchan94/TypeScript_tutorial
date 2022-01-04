// index signaute in class

// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}

class Students {
  [index: string]: "male" | "female";

  mark: "male" = "male";
}

const classa = new Students();

classa.mark = "male";
classa.jade = "male";

// index signaute  초기값을 설정할 수 없음
