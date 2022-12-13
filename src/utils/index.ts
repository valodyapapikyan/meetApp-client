

export  const isKeysExist = (target: {[key: string]: any} | null) => {
  return target && Object.keys(target).length
}