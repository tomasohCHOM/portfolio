#!/bin/bash

INPUT_DIR="public/drawings"
OUTPUT_DIR="public/ascii"
WIDTH=400

mkdir -p "$OUTPUT_DIR"

for input_file in "$INPUT_DIR"/*.png "$INPUT_DIR"/*.jpg; do
  [ -e "$input_file" ] || continue

  filename="$(basename "$input_file")"
  output_file="$OUTPUT_DIR/${filename%.*}.txt"

  echo "Converting: $input_file -> $output_file"

  gocii -in "$input_file" -out "$output_file" -width "$WIDTH" -noprint -invert
done

echo "Done converting files to ASCII"
