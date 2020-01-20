#!/usr/bin/env ruby

sx, sy, tx, ty = gets.chomp.split(' ').map(&:to_i)

x_length = tx - sx
y_length = ty - sy

first = 'R' * x_length + 'U' * y_length
second = 'U' + 'L' * (x_length + 1) + 'D' * (y_length + 1) + 'R'
third = 'U' * y_length + 'R' * x_length
fourth = 'R' + 'D' * (y_length + 1) + 'L' * (x_length + 1) + 'U'

print("#{first + second + third + fourth}\n")
