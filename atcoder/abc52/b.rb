#!/usr/bin/env ruby

n = gets.chomp.to_i
s = gets.chomp

max = 0
total = 0
n.times do |i|
  text = s[i]
  if text == 'I'
    total += 1
  end

  if text == 'D'
    total -= 1
  end

  if total > max
    max = total
  end
end

print("#{max}\n")
