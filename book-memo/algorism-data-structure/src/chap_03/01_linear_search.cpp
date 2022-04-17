#include "../all.h"

int main() {
  int N, v;
  std::cin >> N >> v;
  std::vector<int> array(N);
  for (int i = 0; i < N; i++) {
    std::cin >> array[i];
  }

  bool found = false;
  for (auto itr = std::begin(array); itr != std::end(array); ++itr) {
    if (*itr == v) {
      found = true;
      break;
    }
  }
  if (found){
    std::cout << "found"s << std::endl;
  } else {
    std::cout << "not found" << std::endl;
  }
}
