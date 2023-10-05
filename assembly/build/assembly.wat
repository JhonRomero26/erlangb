(module
 (type $f64_f64_=>_f64 (func_subtype (param f64 f64) (result f64) func))
 (memory $0 0)
 (export "lossErlangb" (func $assembly/index/lossErlangb))
 (export "organsErlangb" (func $assembly/index/organsErlangb))
 (export "trafficOfferted" (func $assembly/index/trafficOfferted))
 (export "memory" (memory $0))
 (func $assembly/index/lossErlangb (type $f64_f64_=>_f64) (param $0 f64) (param $1 f64) (result f64)
  (local $2 f64)
  (local $3 i32)
  local.get $1
  f64.const 0
  f64.lt
  if
   f64.const 0
   return
  end
  f64.const 1
  local.set $2
  i32.const 1
  local.set $3
  loop $for-loop|0
   local.get $3
   f64.convert_i32_s
   local.get $0
   f64.le
   if
    local.get $1
    local.get $2
    f64.mul
    local.get $3
    f64.convert_i32_s
    f64.div
    local.tee $2
    local.get $2
    f64.const 1
    f64.add
    f64.div
    local.set $2
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  local.get $2
 )
 (func $assembly/index/organsErlangb (type $f64_f64_=>_f64) (param $0 f64) (param $1 f64) (result f64)
  (local $2 f64)
  (local $3 f64)
  f64.const 1
  local.set $2
  f64.const 1
  local.set $3
  loop $while-continue|0
   local.get $0
   local.get $2
   f64.mul
   local.get $3
   f64.div
   local.tee $2
   local.get $2
   f64.const 1
   f64.add
   f64.div
   local.tee $2
   local.get $1
   f64.le
   i32.eqz
   if
    local.get $3
    f64.const 1
    f64.add
    local.set $3
    br $while-continue|0
   end
  end
  local.get $3
 )
 (func $assembly/index/trafficOfferted (type $f64_f64_=>_f64) (param $0 f64) (param $1 f64) (result f64)
  (local $2 f64)
  (local $3 f64)
  (local $4 f64)
  (local $5 f64)
  (local $6 i32)
  local.get $0
  f64.const 1
  f64.lt
  if
   f64.const 0
   return
  end
  local.get $1
  f64.const 0
  f64.lt
  local.get $1
  f64.const 1
  f64.gt
  i32.or
  if
   f64.const 0
   return
  end
  local.get $1
  f64.const 0
  f64.eq
  if
   f64.const 0
   return
  end
  f64.const 1
  local.set $3
  f64.const 1
  local.set $5
  i32.const 1
  local.set $6
  loop $for-loop|0
   local.get $6
   f64.convert_i32_s
   local.get $0
   f64.le
   if
    local.get $5
    local.get $6
    f64.convert_i32_s
    f64.div
    local.tee $2
    local.get $2
    f64.const 1
    f64.add
    f64.div
    local.set $5
    local.get $6
    i32.const 1
    i32.add
    local.set $6
    br $for-loop|0
   end
  end
  loop $while-continue|0
   local.get $1
   local.get $5
   f64.gt
   if
    f64.const 0
    local.set $5
    local.get $3
    local.get $3
    f64.add
    local.tee $3
    f64.const 0
    f64.lt
    br_if $while-continue|0
    f64.const 1
    local.set $5
    i32.const 1
    local.set $6
    loop $for-loop|02
     local.get $6
     f64.convert_i32_s
     local.get $0
     f64.le
     if
      local.get $3
      local.get $5
      f64.mul
      local.get $6
      f64.convert_i32_s
      f64.div
      local.tee $2
      local.get $2
      f64.const 1
      f64.add
      f64.div
      local.set $5
      local.get $6
      i32.const 1
      i32.add
      local.set $6
      br $for-loop|02
     end
    end
    br $while-continue|0
   end
  end
  f64.const 0
  local.set $5
  local.get $3
  f64.const 0
  f64.add
  f64.const 0.5
  f64.mul
  local.tee $2
  f64.const 0
  f64.lt
  i32.eqz
  if
   f64.const 1
   local.set $5
   i32.const 1
   local.set $6
   loop $for-loop|06
    local.get $6
    f64.convert_i32_s
    local.get $0
    f64.le
    if
     local.get $2
     local.get $5
     f64.mul
     local.get $6
     f64.convert_i32_s
     f64.div
     local.tee $5
     local.get $5
     f64.const 1
     f64.add
     f64.div
     local.set $5
     local.get $6
     i32.const 1
     i32.add
     local.set $6
     br $for-loop|06
    end
   end
  end
  loop $while-continue|1
   local.get $3
   local.get $4
   f64.sub
   local.get $4
   f64.const 1
   f64.max
   f64.const 0.0001
   f64.mul
   f64.gt
   if
    local.get $1
    local.get $5
    f64.gt
    if
     block $__inlined_func$assembly/index/lossErlangb8
      f64.const 0
      local.set $5
      local.get $2
      local.tee $4
      local.get $3
      f64.add
      f64.const 0.5
      f64.mul
      local.tee $2
      f64.const 0
      f64.lt
      br_if $__inlined_func$assembly/index/lossErlangb8
      f64.const 1
      local.set $5
      i32.const 1
      local.set $6
      loop $for-loop|010
       local.get $6
       f64.convert_i32_s
       local.get $0
       f64.le
       if
        local.get $2
        local.get $5
        f64.mul
        local.get $6
        f64.convert_i32_s
        f64.div
        local.tee $5
        local.get $5
        f64.const 1
        f64.add
        f64.div
        local.set $5
        local.get $6
        i32.const 1
        i32.add
        local.set $6
        br $for-loop|010
       end
      end
     end
    else
     block $__inlined_func$assembly/index/lossErlangb12
      f64.const 0
      local.set $5
      local.get $4
      local.get $2
      local.tee $3
      f64.add
      f64.const 0.5
      f64.mul
      local.tee $2
      f64.const 0
      f64.lt
      br_if $__inlined_func$assembly/index/lossErlangb12
      f64.const 1
      local.set $5
      i32.const 1
      local.set $6
      loop $for-loop|014
       local.get $6
       f64.convert_i32_s
       local.get $0
       f64.le
       if
        local.get $2
        local.get $5
        f64.mul
        local.get $6
        f64.convert_i32_s
        f64.div
        local.tee $5
        local.get $5
        f64.const 1
        f64.add
        f64.div
        local.set $5
        local.get $6
        i32.const 1
        i32.add
        local.set $6
        br $for-loop|014
       end
      end
     end
    end
    br $while-continue|1
   end
  end
  local.get $4
 )
)
