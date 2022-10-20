---
title: "Multiprocessing with Pandas"
excerpt: "Using Python's multiprocessing to process pandas dataframe paralelly."
coverImage: "https://images.unsplash.com/photo-1666115883713-c5766e9d668e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
date: "2022-09-16T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Pandas is a powerful tool when it comes to data manipulation using Python.

In this post, we're going to use multiprocessing to process each subset of our dataframe parallelly.

A seperate core will process each group by seperately instead of doing it sequentially. This will increase the speed.

```python
from multiprocessing import Pool
import pandas as pd
```

```python
def take_mean_age(dataframe):
    team, group = dataframe

    return pd.DataFrame({
        "Goals Scored": group["GF"].sum(),
        "Goals Conceded": group["GA"].sum(),
        "Total Points scored": group["Pts"].sum(),
        "Final position of the team": group["Pos"].sum(),
        "Win": group["W"].sum(),
        "Draw": group["D"].sum(),
        "Loss": group["L"].sum(),
    }, index=[team])

```

```python
pl = pd.read_csv('EPL Standings 2000-2022.csv', usecols=['Season', 'Pos', 'Team', 'Pld',
                                                        'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts'])
pl
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Season</th>
      <th>Pos</th>
      <th>Team</th>
      <th>Pld</th>
      <th>W</th>
      <th>D</th>
      <th>L</th>
      <th>GF</th>
      <th>GA</th>
      <th>GD</th>
      <th>Pts</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2000-01</td>
      <td>1</td>
      <td>Manchester United</td>
      <td>38</td>
      <td>24</td>
      <td>8</td>
      <td>6</td>
      <td>79</td>
      <td>31</td>
      <td>48</td>
      <td>80</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2000-01</td>
      <td>2</td>
      <td>Arsenal</td>
      <td>38</td>
      <td>20</td>
      <td>10</td>
      <td>8</td>
      <td>63</td>
      <td>38</td>
      <td>25</td>
      <td>70</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2000-01</td>
      <td>3</td>
      <td>Liverpool</td>
      <td>38</td>
      <td>20</td>
      <td>9</td>
      <td>9</td>
      <td>71</td>
      <td>39</td>
      <td>32</td>
      <td>69</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2000-01</td>
      <td>4</td>
      <td>Leeds United</td>
      <td>38</td>
      <td>20</td>
      <td>8</td>
      <td>10</td>
      <td>64</td>
      <td>43</td>
      <td>21</td>
      <td>68</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2000-01</td>
      <td>5</td>
      <td>Ipswich Town</td>
      <td>38</td>
      <td>20</td>
      <td>6</td>
      <td>12</td>
      <td>57</td>
      <td>42</td>
      <td>15</td>
      <td>66</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>435</th>
      <td>2021-22</td>
      <td>16</td>
      <td>Everton</td>
      <td>38</td>
      <td>11</td>
      <td>6</td>
      <td>21</td>
      <td>43</td>
      <td>66</td>
      <td>-23</td>
      <td>39</td>
    </tr>
    <tr>
      <th>436</th>
      <td>2021-22</td>
      <td>17</td>
      <td>Leeds United</td>
      <td>38</td>
      <td>9</td>
      <td>11</td>
      <td>18</td>
      <td>42</td>
      <td>79</td>
      <td>-37</td>
      <td>38</td>
    </tr>
    <tr>
      <th>437</th>
      <td>2021-22</td>
      <td>18</td>
      <td>Burnley</td>
      <td>38</td>
      <td>7</td>
      <td>14</td>
      <td>17</td>
      <td>34</td>
      <td>53</td>
      <td>-19</td>
      <td>35</td>
    </tr>
    <tr>
      <th>438</th>
      <td>2021-22</td>
      <td>19</td>
      <td>Watford</td>
      <td>38</td>
      <td>6</td>
      <td>5</td>
      <td>27</td>
      <td>34</td>
      <td>77</td>
      <td>-43</td>
      <td>23</td>
    </tr>
    <tr>
      <th>439</th>
      <td>2021-22</td>
      <td>20</td>
      <td>Norwich City</td>
      <td>38</td>
      <td>5</td>
      <td>7</td>
      <td>26</td>
      <td>23</td>
      <td>84</td>
      <td>-61</td>
      <td>22</td>
    </tr>
  </tbody>
</table>
<p>440 rows × 11 columns</p>
</div>

```python
with Pool(4) as p:
    results = p.map(take_mean_age, pl.groupby("Team"))

results_df = pd.concat(results)
results_df.sort_values('Total Points scored', ascending=False)
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Goals Scored</th>
      <th>Goals Conceded</th>
      <th>Total Points scored</th>
      <th>Final position of the team</th>
      <th>Win</th>
      <th>Draw</th>
      <th>Loss</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Manchester United</th>
      <td>1562</td>
      <td>782</td>
      <td>1698</td>
      <td>63</td>
      <td>507</td>
      <td>177</td>
      <td>152</td>
    </tr>
    <tr>
      <th>Chelsea</th>
      <td>1538</td>
      <td>757</td>
      <td>1665</td>
      <td>73</td>
      <td>492</td>
      <td>189</td>
      <td>155</td>
    </tr>
    <tr>
      <th>Arsenal</th>
      <td>1561</td>
      <td>876</td>
      <td>1603</td>
      <td>83</td>
      <td>470</td>
      <td>193</td>
      <td>173</td>
    </tr>
    <tr>
      <th>Liverpool</th>
      <td>1516</td>
      <td>808</td>
      <td>1591</td>
      <td>91</td>
      <td>464</td>
      <td>199</td>
      <td>173</td>
    </tr>
    <tr>
      <th>Manchester City</th>
      <td>1478</td>
      <td>846</td>
      <td>1440</td>
      <td>126</td>
      <td>428</td>
      <td>156</td>
      <td>214</td>
    </tr>
    <tr>
      <th>Tottenham Hotspur</th>
      <td>1323</td>
      <td>1011</td>
      <td>1370</td>
      <td>141</td>
      <td>393</td>
      <td>191</td>
      <td>252</td>
    </tr>
    <tr>
      <th>Everton</th>
      <td>1102</td>
      <td>1059</td>
      <td>1191</td>
      <td>202</td>
      <td>321</td>
      <td>228</td>
      <td>287</td>
    </tr>
    <tr>
      <th>Newcastle United</th>
      <td>943</td>
      <td>1100</td>
      <td>973</td>
      <td>222</td>
      <td>260</td>
      <td>193</td>
      <td>307</td>
    </tr>
    <tr>
      <th>West Ham United</th>
      <td>908</td>
      <td>1060</td>
      <td>895</td>
      <td>225</td>
      <td>238</td>
      <td>181</td>
      <td>303</td>
    </tr>
    <tr>
      <th>Aston Villa</th>
      <td>866</td>
      <td>1009</td>
      <td>885</td>
      <td>227</td>
      <td>225</td>
      <td>210</td>
      <td>287</td>
    </tr>
    <tr>
      <th>Southampton</th>
      <td>698</td>
      <td>803</td>
      <td>704</td>
      <td>178</td>
      <td>181</td>
      <td>161</td>
      <td>228</td>
    </tr>
    <tr>
      <th>Fulham</th>
      <td>631</td>
      <td>831</td>
      <td>640</td>
      <td>198</td>
      <td>162</td>
      <td>154</td>
      <td>254</td>
    </tr>
    <tr>
      <th>Leicester City</th>
      <td>583</td>
      <td>592</td>
      <td>554</td>
      <td>114</td>
      <td>150</td>
      <td>104</td>
      <td>164</td>
    </tr>
    <tr>
      <th>Blackburn Rovers</th>
      <td>518</td>
      <td>592</td>
      <td>530</td>
      <td>128</td>
      <td>140</td>
      <td>110</td>
      <td>168</td>
    </tr>
    <tr>
      <th>Sunderland</th>
      <td>520</td>
      <td>795</td>
      <td>520</td>
      <td>215</td>
      <td>127</td>
      <td>139</td>
      <td>266</td>
    </tr>
    <tr>
      <th>Bolton Wanderers</th>
      <td>495</td>
      <td>613</td>
      <td>506</td>
      <td>137</td>
      <td>132</td>
      <td>110</td>
      <td>176</td>
    </tr>
    <tr>
      <th>West Bromwich Albion</th>
      <td>510</td>
      <td>772</td>
      <td>490</td>
      <td>197</td>
      <td>117</td>
      <td>139</td>
      <td>238</td>
    </tr>
    <tr>
      <th>Stoke City</th>
      <td>398</td>
      <td>525</td>
      <td>457</td>
      <td>122</td>
      <td>116</td>
      <td>109</td>
      <td>155</td>
    </tr>
    <tr>
      <th>Crystal Palace</th>
      <td>428</td>
      <td>545</td>
      <td>437</td>
      <td>131</td>
      <td>115</td>
      <td>92</td>
      <td>173</td>
    </tr>
    <tr>
      <th>Middlesbrough</th>
      <td>414</td>
      <td>503</td>
      <td>432</td>
      <td>132</td>
      <td>107</td>
      <td>111</td>
      <td>162</td>
    </tr>
    <tr>
      <th>Wolverhampton Wanderers</th>
      <td>328</td>
      <td>462</td>
      <td>348</td>
      <td>109</td>
      <td>90</td>
      <td>78</td>
      <td>136</td>
    </tr>
    <tr>
      <th>Wigan Athletic</th>
      <td>316</td>
      <td>482</td>
      <td>331</td>
      <td>117</td>
      <td>85</td>
      <td>76</td>
      <td>143</td>
    </tr>
    <tr>
      <th>Charlton Athletic</th>
      <td>301</td>
      <td>386</td>
      <td>325</td>
      <td>85</td>
      <td>85</td>
      <td>70</td>
      <td>111</td>
    </tr>
    <tr>
      <th>Burnley</th>
      <td>300</td>
      <td>455</td>
      <td>325</td>
      <td>120</td>
      <td>83</td>
      <td>76</td>
      <td>145</td>
    </tr>
    <tr>
      <th>Swansea City</th>
      <td>306</td>
      <td>383</td>
      <td>312</td>
      <td>85</td>
      <td>82</td>
      <td>66</td>
      <td>118</td>
    </tr>
    <tr>
      <th>Leeds United</th>
      <td>319</td>
      <td>349</td>
      <td>311</td>
      <td>69</td>
      <td>87</td>
      <td>50</td>
      <td>91</td>
    </tr>
    <tr>
      <th>Birmingham City</th>
      <td>273</td>
      <td>360</td>
      <td>301</td>
      <td>99</td>
      <td>73</td>
      <td>82</td>
      <td>111</td>
    </tr>
    <tr>
      <th>Portsmouth</th>
      <td>292</td>
      <td>380</td>
      <td>293</td>
      <td>97</td>
      <td>79</td>
      <td>65</td>
      <td>122</td>
    </tr>
    <tr>
      <th>Watford</th>
      <td>275</td>
      <td>441</td>
      <td>261</td>
      <td>113</td>
      <td>67</td>
      <td>60</td>
      <td>139</td>
    </tr>
    <tr>
      <th>Norwich City</th>
      <td>251</td>
      <td>489</td>
      <td>234</td>
      <td>119</td>
      <td>56</td>
      <td>66</td>
      <td>144</td>
    </tr>
    <tr>
      <th>Bournemouth</th>
      <td>241</td>
      <td>330</td>
      <td>211</td>
      <td>69</td>
      <td>56</td>
      <td>43</td>
      <td>91</td>
    </tr>
    <tr>
      <th>Brighton &amp; Hove Albion</th>
      <td>190</td>
      <td>258</td>
      <td>209</td>
      <td>72</td>
      <td>48</td>
      <td>65</td>
      <td>77</td>
    </tr>
    <tr>
      <th>Hull City</th>
      <td>181</td>
      <td>323</td>
      <td>171</td>
      <td>88</td>
      <td>41</td>
      <td>48</td>
      <td>101</td>
    </tr>
    <tr>
      <th>Reading</th>
      <td>136</td>
      <td>186</td>
      <td>119</td>
      <td>45</td>
      <td>32</td>
      <td>23</td>
      <td>59</td>
    </tr>
    <tr>
      <th>Sheffield United</th>
      <td>91</td>
      <td>157</td>
      <td>115</td>
      <td>47</td>
      <td>31</td>
      <td>22</td>
      <td>61</td>
    </tr>
    <tr>
      <th>Ipswich Town</th>
      <td>98</td>
      <td>106</td>
      <td>102</td>
      <td>23</td>
      <td>29</td>
      <td>15</td>
      <td>32</td>
    </tr>
    <tr>
      <th>Queens Park Rangers</th>
      <td>115</td>
      <td>199</td>
      <td>92</td>
      <td>57</td>
      <td>22</td>
      <td>26</td>
      <td>66</td>
    </tr>
    <tr>
      <th>Derby County</th>
      <td>90</td>
      <td>211</td>
      <td>83</td>
      <td>56</td>
      <td>19</td>
      <td>26</td>
      <td>69</td>
    </tr>
    <tr>
      <th>Cardiff City</th>
      <td>66</td>
      <td>143</td>
      <td>64</td>
      <td>38</td>
      <td>17</td>
      <td>13</td>
      <td>46</td>
    </tr>
    <tr>
      <th>Huddersfield Town</th>
      <td>50</td>
      <td>134</td>
      <td>53</td>
      <td>36</td>
      <td>12</td>
      <td>17</td>
      <td>47</td>
    </tr>
    <tr>
      <th>Brentford</th>
      <td>48</td>
      <td>56</td>
      <td>46</td>
      <td>13</td>
      <td>13</td>
      <td>7</td>
      <td>18</td>
    </tr>
    <tr>
      <th>Blackpool</th>
      <td>55</td>
      <td>78</td>
      <td>39</td>
      <td>19</td>
      <td>10</td>
      <td>9</td>
      <td>19</td>
    </tr>
    <tr>
      <th>Coventry City</th>
      <td>36</td>
      <td>63</td>
      <td>34</td>
      <td>19</td>
      <td>8</td>
      <td>10</td>
      <td>20</td>
    </tr>
    <tr>
      <th>Bradford City</th>
      <td>30</td>
      <td>70</td>
      <td>26</td>
      <td>20</td>
      <td>5</td>
      <td>11</td>
      <td>22</td>
    </tr>
  </tbody>
</table>
</div>

## Code snippet

<img src="https://i.imgur.com/XrZB0D4.png">

## Conclusion

Parallelize Pandas using the Python's multiprocessing.
