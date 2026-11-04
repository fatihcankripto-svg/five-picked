/** Explicit reuse terms for compilations that have not been released under an open license. */
export function datasetLicense(url: string) {
  return {
    '@type': 'CreativeWork',
    name: 'FIVE PICKED dataset use and republication terms',
    url: `${url}#dataset-license`,
  }
}

export const datasetLicenseNotice = `<h2 id="dataset-license">Dataset use and republication</h2>
<p>You may download this dataset to inspect the observations and check the calculations. To request permission to republish or redistribute our compilation, email <a href="mailto:hello@fivepicked.com">hello@fivepicked.com</a> with the dataset and intended use. No open license is granted for this compilation. These terms do not restrict uses permitted by applicable law and do not grant rights to provider logos or third-party source material.</p>`
