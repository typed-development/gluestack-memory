## Identifying build memory increase

### Context
Recently typed development noticed a large increase of memory consumed during the production building on one of 
our gluestack/nextjs sites.

Prior we were using 
```
"@gluestack-style/react": "1.0.1",
"@gluestack-ui/config": "^1.0.0",
"@gluestack-ui/themed": "1.0.1",
"@gluestack-ui/transitions": "^0.1.9",
```

The memory increase was brought to our attention when our ci started throwing `JavaScript heap out of memory`

We have a temp work around to set the memory higher but want to know why the increase in memory usage in happening

We looked through the bundle sizes are there has been no significant increase during upgrade so that points to a memory usage issue only.
 
## Steps to reproduce
We are trying to set up a repo with this outside of our internal repo but are having issues getting the memory to be within the expect range for post upgrade. By taking the pre upgrade versions and applying them to the next-head-starter-kit and building the next app. We are still seeing post upgrade memory usage....
We though this might be a rabbit hole but we can predictably reproduce the memory usage in our internal repo.

**Steps we have tried to get starter to simulate issue** 
- Upgrading to latest building; No success ❌
- Reverting to version that work for our repo; No success ❌
- Copying our yarn.lockfile over and install then building; No success ❌

## Results
Using `/usr/bin/time -l yarn build` we can see the max memory consumed during the build.

We have published the pre upgrade and post upgrade.

#### Pre upgrade
```
1791705088  maximum resident set size
        0  average shared memory size
        0  average unshared data size
        0  average unshared stack size
    509464  page reclaims
        60  page faults
        0  swaps
        0  block input operations
        0  block output operations
    1657  messages sent
        595  messages received
        0  signals received
    9050  voluntary context switches
    168790  involuntary context switches
1508737244  instructions retired
537448131  cycles elapsed
61124480  peak memory footprint
```
#### Post upgrade
```
3096772608  maximum resident set size
            0  average shared memory size
            0  average unshared data size
            0  average unshared stack size
        752730  page reclaims
        1539  page faults
            0  swaps
            0  block input operations
            0  block output operations
        1131  messages sent
            623  messages received
            0  signals received
        18935  voluntary context switches
        775292  involuntary context switches
    1523622860  instructions retired
    574269076  cycles elapsed
    66285824  peak memory footprint
```