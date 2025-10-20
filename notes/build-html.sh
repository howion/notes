#!/usr/bin/env bash
set -euo pipefail

##############################################################################
# PARAMETERS
##############################################################################
OUT_DIR="./notes/__dist"
TMP_MD="./notes/__dist/.tmp.md"

##############################################################################
# UTILS
##############################################################################
info() {
    echo -e "\033[1;34m[INFO]\033[0m $*"
}

warn() {
    echo -e "\033[1;33m[WARN]\033[0m $*"
}

error() {
    echo -e "\033[1;31m[ERROR]\033[0m $*" >&2
    exit 1
}

##############################################################################
# LOGIC
##############################################################################

minify_html() {
    if [[ -z html-minifier-terser ]]; then
        warn "html-minifier-terser not found; skipping minification"
        return
    fi

    info "Minifying HTML..."
    local input_html="$1"

    html-minifier-terser \
        --collapse-whitespace \
        --remove-comments \
        --remove-optional-tags \
        --minify-css true \
        --minify-js true \
        -o "${input_html}" \
        "${input_html}"
}

build() {
    local input_dir="$1"
    local output_file="${OUT_DIR}/$2.html"
    local metadata="$3"

    # combine all markdown files into one temporary file
    cat "${input_dir}"/*.md > "${TMP_MD}"

    rm -f "${output_file}"

    info "Building HTML..."

    pandoc "${TMP_MD}" \
        --standalone \
        -o "${output_file}" \
        --katex \
        --toc \
        --metadata "${metadata}" \
        --template="./notes/template.html"

    rm -f "${TMP_MD}"

    minify_html "${output_file}"

    if [[ -z wkhtmltopdf ]]; then
        warn "wkhtmltopdf not found; skipping building PDF"
        return
    fi

    build_pdf "${output_file}"
}

build_pdf() {
    local input_html="$1"
    local output_pdf="${input_html%.html}.pdf"

    info "Building PDF..."

    chromium --headless --disable-gpu \
        --run-all-compositor-stages-before-draw \
        --print-to-pdf="${output_pdf}" \
        --print-to-pdf-no-header \
        --no-pdf-header-footer \
        --no-margins \
        --print-backgrounds \
        --disable-print-preview \
        --virtual-time-budget=10000 \
        "${input_html}"
}

##############################################################################
# MAIN
##############################################################################

info "Preparing output directory..."
mkdir -p "${OUT_DIR}"
rm -rf "${OUT_DIR}"/*

info "Generating: Abstract Algebra > Group Theory"
build "./notes/abstract-algebra/01-group-theory" "abstract-algebra/group-theory" "title=Group Theory"

info "Generating: Abstract Algebra > Ring Theory"
build "./notes/abstract-algebra/02-ring-theory" "abstract-algebra/ring-theory" "title=Ring Theory"

info "Generating: Logic > Propositional Logic"
build "./notes/logic/01-propositional-logic" "logic/propositional-logic" "title=Propositional Logic"

info "Build complete!"
