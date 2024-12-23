# MathJax-ing!

In Cayman Improved, you can use MathJax like using LaTeX/KaTeX in GitHub Pages by including MathJax script into content/default page in `_layouts` directory!

```html
<!-- Put in scripts section (after <body> section, before closure of </html> tag) -->
<script
    src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
    type="text/javascript"></script>
```


## Basic Equation: The quadratic formula

$$ {X_{1,2} = { {-b \pm \sqrt{D}} \over {2a} } ; D = b^2 - 4ac} $$


## Basic Equation: Circle Circumference/Perimeter & Area

$$
\begin{align}
C = \pi d = 2 \pi r
\end{align}
$$

$$
\begin{align}
\text{Area} &= \frac{1}{2} \cdot {C} \cdot {r} \\
     &= \frac{1}{2} \cdot {2 \pi r} \cdot {r} \\
     &= \pi r^2 \\
\end{align}
$$


## Numbered/Bulleted List

Simplification of square roots:
1. $$\sqrt{(a+b) + 2\sqrt{ab}} = \sqrt{a} + \sqrt{b}$$
2. $$\sqrt{(a+b) - 2\sqrt{ab}} = \sqrt{a} - \sqrt{b}$$

## Inline Equation

### Discriminant of quadratic equation:

$${ D = \Delta = b^2 - 4ac }$$

1. If $${\Delta > 0}$$, then there are two distinct roots, where both are real numbers.

   $${ \frac{-b + \sqrt{\Delta}}{2a} \text{ and } \frac{-b - \sqrt{\Delta}}{2a} }$$

2. If $${\Delta = 0}$$, then there is exactly one real root $${ -\frac{b}{2a} }$$ which know as double roots or two equal roots.
3. If $${\Delta >= 0}$$, then there are two distinct roots present, either equal or inequal roots.
4. If $${\Delta < 0}$$, then there are no real roots. Rather, there are two distinct (non-real) complex roots,

   $${ -\frac{b}{2a} + i\frac{\sqrt{-\Delta}}{2a} \text{ and } -\frac{b}{2a} - i\frac{\sqrt{-\Delta}}{2a} }$$

   which are complex conjugates of each other. In these expressions $${i}$$ is the imaginary unit.


## Example of making two-columns in MathJaX

$$
\begin{array}{r l c | c r l}
{A} &= 1/2 \cdot {C} \cdot {r} &&& {C} &= \pi d \\
{ } &= 1/2 \cdot {2 \pi r} \cdot {r} &&& { } &= \pi \times 2r \\
{ } &= \pi r^2 \\
\end{array}
$$

$$ \small\text{(where $A$ is area, $C$ is perimeter, $d$ is diameter, $r$ is radius)} $$


## Example table

$${\begin{array} {|r|r|}
\hline Al & 0_1 \\
\hline    & 1_1 \\
\hline Bi & 2_1 \\
\hline
\end{array}}$$

$$
\begin{array}{c|c}
  a^2-b^2 &
  \begin{array}{c|c|c} 1+i & 1-i & \frac{1}{\sqrt{2}}
  \end{array} \\
  \hline
  \begin{array}{c}
    a-b \\ a+b
  \end{array} & \sqrt {2}
\end{array}
$$

$$
\begin{array}{c|c}
a^2-b^2 &
 \begin{array}{ccc} 1+i & 1-i & \frac{1}{\sqrt{2}}
 \end{array} \\\hline
 \begin{array}{cc}a-b &  a+b
 \end{array} & \sqrt {2}
\end{array}
$$




## Example: Sinus and Cosinus Rules

You can natively create table by using MathJax syntax declaration as follow:

$$
{\begin{array} {|c|c|}
\hline \text{Sinus Rule} & \text{Cosinus Rule} \\
\hline \LARGE{\frac{a}{\sin{A}} = \frac{b}{\sin{B}} = \frac{c}{\sin{C}}} &
 \begin{array}{c}
  {a^2 = b^2 + c^2 - 2bc \cos{A}} \\\hline
  {b^2 = a^2 + c^2 - 2ac \cos{B}} \\\hline
  {c^2 = a^2 + b^2 - 2ab \cos{C}}
 \end{array} \\
\hline
\end{array}}
$$

You can put your math equations into native markdown table as follow:

| Sinus Rule | Cosinus Rule |
|:------------:|:--------------:|
| $$ \LARGE{\frac{a}{\sin{A}} = \frac{b}{\sin{B}} = \frac{c}{\sin{C}}} $$ | $$\begin{array}{c} {a^2 = b^2 + c^2 - 2bc \cos{A}} \\\hline  {b^2 = a^2 + c^2 - 2ac \cos{B}} \\\hline  {c^2 = a^2 + b^2 - 2ab \cos{C}} \end{array}$$ |

Or plotting into spanned table like this: (this requires manual HTML table declaration as follow):

<table>
  <thead>
    <tr>
      <th style="text-align: center">Sinus Rule</th>
      <th style="text-align: center">Cosinus Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3" style="text-align: center">$$ {\frac{a}{\sin{A}} = \frac{b}{\sin{B}} = \frac{c}{\sin{C}}} $$</td>
      <td style="text-align: center">$$ {a^2 = b^2 + c^2 - 2bc \cos{A}} $$</td>
    </tr>
    <tr>
      <td style="text-align: center">$$ {b^2 = a^2 + c^2 - 2ac \cos{B}} $$</td>
    </tr>
    <tr>
      <td style="text-align: center">$$ {c^2 = a^2 + b^2 - 2ab \cos{C}} $$</td>
    </tr>
  </tbody>
</table>

## I don't know that chemistry is also work as well?

Basic Chemistry Equation:

$$ \ce{2 H2 + O2 -> 2 H2O} $$

$$ \ce{CO2 + C -> 2 CO} $$

Ammonia Synthesis (based on [The Haber Process - LibreText Chemistry](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Le_Chateliers_Principle/The_Haber_Process)):

$$
\ce{ N2 + 3 H2 <--> 2 NH3 } \quad
{\Delta H^{\circ} = \pu{-92.4 kJ}} \,
({ \Delta H^{\circ}_\pu{298K} = \pu{-46.16 kJ/mol}})
$$

$$ \ce{N2(g) + 3 H2(g) <-->[{high pressure, high temperature, catalyst}] 2 NH3(g)} $$

Iodidation Process:

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$


And try to load this...


$$ \ce{C6H5-CHO} $$

$$ \ce{$A$ ->[\ce{+H2O}] $B$} $$

$$ \ce{SO4^2- + Ba^2+ -> BaSO4 v} $$


## Chemical Bond support..? (not yet)

Try to load chemical bond here...

$$
\ce{\phantom{H_3}CH_3}\\% phantom to get the bond aligned with the C
| \\
\ce{CH_3-C-CH_3}\\
| \\
\ce{Cl}
$$

3,3-dimetil-1-butena:

$$
\ce{CH_3\phantom{O2}}\\
|\phantom{CH2} \\
\ce{CH_3-C-CH=CH_2}\\
|\phantom{CH2} \\
\ce{Cl\phantom{CH2}}
$$

Try it with chemical figure (chemfig):

$$ \chemfig{H-C(-[2]H)(-[6]H)-C(=[1]O)-[7]H} $$


## References

This is for example math reference, see original articles for more information about the equation:
- [Wikipedia: Quadratic equation](https://en.wikipedia.org/wiki/Quadratic_equation)
