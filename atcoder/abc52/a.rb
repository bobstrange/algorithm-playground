#!/usr/bin/env ruby

a, b, c, d = gets.chomp.split(' ').map(&:to_i)

area_ab = a * b
area_cd = c * d

area = if area_ab >= area_cd
  area_ab
else
  area_cd
end

print("#{area}\n")
