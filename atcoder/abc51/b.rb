#!/usr/bin/env ruby

# k, s = gets.chomp.split(" ").map(&:to_i)

k, s = [2, 2]

res = 0
(0 .. k).each do |x|
  (0 .. k).each do |y|
    z = s - x - y
    if z >= 0 && z <= k
      res += 1
    end
  end
end

print("#{res}\n")
