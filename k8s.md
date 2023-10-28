kubernetes essentials:

kubectl -> to execute kubernetes commands

kubectl get pods -> Print out information about all of the running pods
kubectl exec -it [pod_name] [cmd] -> Execute the given command in a running pod
kubectl logs [pod_name] -> Print out logs from the given pod
kubectl delete pod [pod_name] -> Deletes the given pod
kubectl apply -f [config file name] -> Tells kubernetes to process the config 
kubectl describe pod [pod_name] -> Print out some information about the running pod
