gcc_options = -std=c++17 -Wall --pedantic-error

01.out: 01_linear_search.cpp
	g++ $(gcc_options) -o $@ $<
run: 01.out
	./01.out
clean:
	rm -f 01.out
.PHONY: run clean
